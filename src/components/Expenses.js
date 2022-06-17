import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
    
    /* Returning data */
    return (
        <div className="expenses">
            {props.items.map(items => (
                <ExpenseItem
                    title={items.title}
                    amount={items.amount}
                    date={items.date}
                />
            ))}
        </div>
    );
}

export default Expenses;