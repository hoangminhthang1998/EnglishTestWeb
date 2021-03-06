import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task.js';

const Container = styled.div`
  width: 20%;
  display: block;
  margin: 5px;
`;
const Answer1 = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 100%;
  flex-direction: column;
  min-height: 66px;
`;
const Title = styled.h3`
  padding: 8px;
  min-height: 63px;
`;
const TaskList = styled.div`
  padding: 8px;
  width: 100%;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

export default class Answer extends React.Component {
  render() {
    return (
        <Container>
            <Title>{this.props.column.title}</Title>
            <Answer1>
                <Droppable droppableId={this.props.column.id}>
                {(provided, snapshot) => (
                    <TaskList
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    >
                    {this.props.tasks.map((task, index) => (
                        <Task key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}    
                    </TaskList>
                )}
                </Droppable>
            </Answer1>
        </Container>
    );
  }
}
