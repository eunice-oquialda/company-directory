import Link from "next/link"
import styles from "../../styles/Contact.module.css"


export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { directory: data }
    }
}

const Contact = ({ directory }) => {
    return ( 
        <>
            <h1>All Contacts</h1>
            { directory.map(contact => (
                <div key={contact.id}>
                    <Link href={'/directory/' + contact.id} className={styles.single} >
                        <h3>{ contact.name }</h3>
                    </Link>

                </div>
            ))}
        </>
     );
}
 
export default Contact;