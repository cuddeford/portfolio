import React, { useRef, useLayoutEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faCloud, faHeart, faMicrochip, faPalette } from '@fortawesome/free-solid-svg-icons'

import { useCustomEventHandler } from '../../../hooks/useCustomEvent'
import ProjectItem from './ProjectItem/'
import ProjectItemsAddBtn from './ProjectItemsAddBtn/'

import './ProjectItems.css'

/**
 * Smoothly scrolls an element to a specific vertical position.
 *
 * @param {HTMLElement} element The element to scroll.
 * @param {number} targetPosition The final scrollTop position.
 * @param {number} duration The duration of the scroll in milliseconds.
 */
function smoothScrollTo(element, targetPosition, duration) {
    const startPosition = element.scrollTop;
    const distance = targetPosition - startPosition;
    let startTime = null;

    // Easing function for a smooth start and end
    // You can find more easing functions online (e.g., easings.net)
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    function animationStep(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        const timeElapsed = currentTime - startTime;
        const nextScrollTop = easeInOutQuad(timeElapsed, startPosition, distance, duration);

        element.scrollTop = nextScrollTop;

        if (timeElapsed < duration) {
            requestAnimationFrame(animationStep);
        } else {
            // Ensure we end exactly at the target position
            element.scrollTop = targetPosition;
        }
    }

    requestAnimationFrame(animationStep);
}

const CategorySection = props => {
    const { category, projects, children, selectedCategories, setSelectedCategories, anyProjectIsShowing } = props

    const parentRef = useRef<HTMLDivElement | null>(null)
    const innerRef = useRef<HTMLDivElement | null>(null)
    useLayoutEffect(() => {
        if (parentRef.current && innerRef.current) {
            const listHeight = innerRef.current.scrollHeight
            const maxHeight = Number(getComputedStyle(innerRef.current).maxHeight.replace('px', ''))

            if (listHeight > maxHeight) {
                parentRef.current.classList.add('show-fader')
                innerRef.current.style.overflowY = 'auto'
            } else {
                parentRef.current.classList.remove('show-fader')
                innerRef.current.style.overflowY = 'hidden'
            }
        }
    }, [selectedCategories])

    const syncFaderAndScroll = () => {
        setTimeout(() => {
            if (parentRef.current && innerRef.current) {
                const listHeight = innerRef.current.scrollHeight
                const maxHeight = Number(getComputedStyle(innerRef.current).maxHeight.replace('px', ''))

                if (listHeight > maxHeight) {
                    parentRef.current.classList.add('show-fader')
                    innerRef.current.style.overflowY = 'auto'
                } else {
                    parentRef.current.classList.remove('show-fader')
                    innerRef.current.style.overflowY = 'hidden'
                    smoothScrollTo(innerRef.current, 0, 200)
                }
            }
        }, 1000)
    }

    // hack to sync the fader and scroll position when changing tags
    useCustomEventHandler('sync-fader-and-scroll', () => {
        syncFaderAndScroll()
        setTimeout(() => {
            syncFaderAndScroll()
        }, 500)
    }, [])

    if (!projects.length) {
        return null
    }

    const iAmSelected = selectedCategories.includes(category)
    const toggleCategory = () => {
        if (iAmSelected) {
            setSelectedCategories(selectedCategories.filter(c => c !== category))
            if (parentRef.current) {
                parentRef.current.classList.add('show-fader')
            }

            if (innerRef.current) {
                smoothScrollTo(innerRef.current, 0, 200)
            }
        } else {
            setSelectedCategories([...selectedCategories, category])
            if (parentRef.current) {
                parentRef.current.classList.remove('show-fader')
            }

            // scroll to the selected project in the category
            setTimeout(() => {
                if (parentRef.current && innerRef.current) {
                    const selectedProjectElement = innerRef.current.querySelector('a.active')?.parentElement
                    if (selectedProjectElement) {
                        const elRect = selectedProjectElement.getBoundingClientRect()
                        const parentRect = innerRef.current.getBoundingClientRect()
                        if (elRect.top < parentRect.top || elRect.bottom > parentRect.bottom) {
                            const magicOffset = elRect.height * 1.7
                            smoothScrollTo(innerRef.current, (elRect.top - parentRect.top) - magicOffset, 200)
                        }
                    }
                }
            }, 1000)
        }

        syncFaderAndScroll()
    }

    const emoji: { [key: string]: any } = {
        'pinned': faHeart,
        'software': faCloud,
        'hardware': faMicrochip,
        'art': faPalette,
    }

    return (
        <div className={`project-category ${iAmSelected ? 'selected' : ''} ${anyProjectIsShowing ? ' project-showing' : ''}`}>
            <h4 className='project-category-title' onClick={toggleCategory} style={{ fontWeight: category === 'pinned' ? 'bold' : 'normal' }}>
                <FontAwesomeIcon icon={emoji[category]} fixedWidth />
                {' '}
                <span>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <span>
                    {projects.length}
                    {' '}
                    <FontAwesomeIcon
                        icon={faChevronUp}
                        size='xs'
                        fixedWidth
                        rotation={iAmSelected ? 180 : 0}
                        style={{ transition: 'transform 1000ms cubic-bezier(0.68, -0.55, 0.265, 1.55)' }}
                    />
                </span>
            </h4>

            <div className='project-category-overflow-wrapper' ref={parentRef}>
                <div className="ProjectItemsList" ref={innerRef} onScroll={e => {
                const target = e.target
                if (target.scrollHeight - target.scrollTop <= target.clientHeight + 1) {
                    // User has scrolled to bottom
                    parentRef.current.classList.remove('show-fader')
                } else {
                    // User is not at bottom
                    parentRef.current.classList.add('show-fader')
                }
            }}>
                {children}
            </div>
            </div>

            <div className='second-border'></div>
        </div>
    )
}

const projectItems = props => {
    const { selectedCategories, setSelectedCategories } = props

    return (
        <div className="col-xs-12 col-sm-4 col-lg-3 ProjectItemsColumn">
            <ul className="ProjectItems">
                {Object.entries(props.projectsByCategory).map(([category, projects]) => {
                    const categoryIsSelected = selectedCategories.includes(category)
                    const anyProjectIsShowing = projects.find(project => {
                        return project.shortId === props?.selectedProject?.shortId
                    })

                    return (
                        <CategorySection
                            key={category}
                            category={category} projects={projects}
                            selectedCategories={selectedCategories}
                            setSelectedCategories={setSelectedCategories}
                            anyProjectIsShowing={anyProjectIsShowing}
                        >
                            {projects.map(project => {
                                const projectIsSelected = props?.selectedProject?.shortId === project.shortId

                                return <ProjectItem
                                    key={project.shortId}
                                    admin={props.admin}
                                    project={project}
                                    projectSlug={props.projectSlug}
                                    projectIsSelected={projectIsSelected}
                                    categoryIsSelected={categoryIsSelected}
                                    projectItemClass={props.projectItemClass}
                                    projectItemTagClass={props.projectItemTagClass}
                                    setPreviewingTags={props.setPreviewingTags}
                                    resetPreviewingTags={props.resetPreviewingTags}
                                    getTagColour={props.getTagColour}
                                    togglePublic={props.togglePublic}
                                    moveProjectUp={props.moveProjectUp}
                                    moveProjectDown={props.moveProjectDown}
                                    deleteProject={props.deleteProject}
                                />
                            })}
                        </CategorySection>
                    )
                })}

                {props.admin
                    ? <ProjectItemsAddBtn />
                    : null}

            </ul>
        </div>
    )
}

export default projectItems
