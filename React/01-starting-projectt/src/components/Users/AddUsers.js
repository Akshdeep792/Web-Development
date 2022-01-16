import React, {useState} from "react";
import Card from "../UI/Card";
import styles from './AddUsers.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser = props => {

    const [enteredUsername, setUsername] = useState('');
    const [enteredAge, setAge] = useState('');
    const [error, setError] = useState();
    const AddUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title : 'Invalid Input',
                message : 'Please enter a valid name and age (non-empty values).'
            })
            return ;
        }
        if(+enteredAge <1){
            setError({
                title : 'Invalid Age',
                message : 'Please enter a valid age (>0)'
            })
            return ;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setUsername('');
        setAge('');
    }

    const addUsername = event => {
        setUsername(event.target.value);
    }
    const addage = event => {
        setAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div>

         {error && <ErrorModal title={error.title} message={error.message} onConfirm = {errorHandler}/> }
        <Card className={styles.input}>
            <form onSubmit={AddUserHandler}>
                <label htmlFor="username" >Username</label>
                <input id="username" type="text" value={enteredUsername} onChange={addUsername} />
                <label htmlFor="age">Age (years)</label>
                <input id="age" type="number" value={enteredAge} onChange={addage}/>

                <Button type="submit"> Add User </Button>
            </form>
        </Card>
        </div>
    )

}
export default AddUser;