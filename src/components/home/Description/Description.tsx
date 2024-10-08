import styles from './Description.module.sass';
import  Image from 'next/image';

export const Description = () => {
    return(
        <section className={styles.Description}>
            <Image src="/images/description.jpeg" alt="products marketplace" width={500} height={300}/>
            <div className={styles.Description__text}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui cumque in perferendis amet? Reprehenderit dignissimos ut laboriosam sint ex distinctio molestiae pariatur provident quod voluptatum. Sunt provident nulla doloremque!</p>
            </div>
        </section>
    )
}