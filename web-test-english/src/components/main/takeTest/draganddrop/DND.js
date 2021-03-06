import React, {useEffect, useState} from 'react'
import './DND.css'

const DND = () => {
    function dragStart(ev) {
        ev.dataTransfer.effectAllowed='move';
        ev.dataTransfer.setData("Text", ev.target.getAttribute('id'));
        ev.dataTransfer.setDragImage(ev.target,50,50);
        return true;
      }
      
      // these functions prevents default behavior of browser
      function dragEnter(ev) {
        ev.preventDefault();
        return true;
      }
      function dragOver(ev) {
        ev.preventDefault();
      }
      
      // function defined for when drop element on target
      function dragDrop(ev) {
        var data = ev.dataTransfer.getData("Text");
        ev.target.appendChild(document.getElementById(data));
        console.log(data);
        ev.stopPropagation();
        return false;
      }
    return(
        <>
            <section id="html5-drag" class="container">
                <header>
                    <h2>Drag N' Drop - <span>HTML5</span></h2>
                </header>
                <article id="holder" onDragEnter={event =>  dragEnter(event)} onDrop={event => dragDrop(event)} onDragOver={event => dragOver(event)}>
                    <div class="drag" id="boxA" draggable="true" ondragstart={event =>  dragStart(event)}></div>
                    <div class="drag" id="boxB" draggable="true" ondragstart={event =>  dragStart(event)}></div>
                    <div class="drag" id="boxC" draggable="true" ondragstart={event =>  dragStart(event)}></div>
                </article>

                <article id="dropIt" onDragEnter={event =>  dragEnter(event)} onDrop={event =>  dragDrop(event)} onDragOver={event =>  dragOver(event)}></article>
            </section>
        </>
    )
}
export default DND 