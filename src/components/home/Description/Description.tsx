import styles from './Description.module.sass';

export const Description = () => {
    return(
        <section className={styles.Description}>
            <img src="/images/description.jpeg" alt="products marketplace" />
            <div className={styles.Description__text}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui cumque in perferendis amet? Reprehenderit dignissimos ut laboriosam sint ex distinctio molestiae pariatur provident quod voluptatum. Sunt provident nulla doloremque!</p>
            </div>
        </section>
    )
}