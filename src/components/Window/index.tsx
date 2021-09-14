import React, {useState, useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {showWindow} from '../../actions'
import * as Icon from 'react-feather';
import './index.scss';


type WindowProps = {
    title: string;
    data?: Array<any>;
    description?: Array<any>;
    isLoading: boolean;
}

type isWindowProps = {
    window: boolean;
}

type projectTypes = {
    _id: string;
    demo: string;
    githubRepository: string;
    title: string;
    description: string;
    techStack: Array<any>;
}

const Window = ({title, data, description, isLoading}: WindowProps) => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isPressed, setIsPressed] = useState(false);
    const windowRef = useRef<HTMLDivElement>(null);
    const win = useSelector((state: isWindowProps) => state.window);
    const dispatch = useDispatch();

    useEffect(() => {
        if(windowRef.current) {
            windowRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
        }
    })

    const onMouseMove = (event: React.MouseEvent<Element, MouseEvent>) => {
        if(isPressed) {
            setPosition({
                x: position.x + event.movementX,
                y: position.y + event.movementY
            })
        }
    }

    return (
        <div className={win ? 'window' : 'window-hide window'} ref={windowRef} onMouseMove={onMouseMove} onMouseLeave={() => setIsPressed(false)}>
            <div className="window__navigation" onMouseDown={() => setIsPressed(true)} onMouseUp={() => setIsPressed(false)}>
                <button aria-label="close" onClick={() => dispatch(showWindow(false))}><Icon.X /></button>
                <h1 className="window__navigation__title">{title}</h1>
            </div>
            <div className="window__content">
                {isLoading ? <div className="loader"></div> : <>
                    {description && description.map(item => <h2 className="window__content__description" key={item._id}>{item.text}</h2>)}
                    {data?.length && data.map(({_id, demo, githubRepository, title, description, techStack}: projectTypes) => {
                        return (
                            <div key={_id} className="window__content__project">
                                <span className="window__content__project__links">
                                    <a href={demo} aria-label="demo"><Icon.Link /></a>
                                    <a href={githubRepository} aria-label="github"><Icon.GitHub /></a>
                                </span>
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <div className="window__content__project__stack">
                                    {techStack && techStack.map(stack => <p key={stack}>{stack}</p>)}
                                </div>
                            </div>
                        )
                    })}
                </>}
            </div>
        </div>
    )
}

export default Window;