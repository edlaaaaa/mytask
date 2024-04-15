import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 135vw;
  padding: 20px;
  background-color: #1a171d;
`

export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 65vw;
  padding: 10px;
  background-color: #000000;
`
export const Heading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
  margin: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 10px;
  width: 80%;
`

export const LabelText = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: normal;
  margin: 5px;
`
export const Input = styled.input`
  height: 22px;
  width: 94%;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: normal;
  padding: 10px;
  outline: none;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 20px;
`
export const Select = styled.select`
  height: 45px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  padding: 10px;
  outline: none;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 20px;
`

export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  height: 45px;
  width: 150%;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  border: 0px;
  margin: 20px;
  cursor: pointer;
`
export const NoTaskTest = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: bold;
  margin: 20px;
`

export const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
`

export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  height: 45px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: '500';
  cursor: pointer;
  outline: none;
  text-align: center;
`

export const TagListItem = styled.li`
  list-style-type: none;
`

export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
  width: 90%;
`

export const TagsHeading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 36px;
  font-weight: bold;
  margin: 20px;
`
