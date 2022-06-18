import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
    
    /* Returning data */
    return (
        <Card className="expenses">
            {props.items.map(items => (
                <ExpenseItem
                    title={items.title}
                    amount={items.amount}
                    date={items.date}
                />
            ))}
        </Card>
    );
}

export default Expenses;