import styles from './Description.module.sass';
import  Image from 'next/image';

const PLACEHOLDER_IMAGE= 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wAARCAAlACUDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAECAwQF/8QAHBAAAgMBAQEBAAAAAAAAAAAAAAECAxEhIjES/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIxA//aAAwDAQACEQMRAD8A4ziOC6WOI649Kc1uoshF4Rsjw11w4RvhiFvoSuXL6BKxegKaGL5Mdb9GZ2Drs6JzMPLrr1NYRva/Jnqt4K23UAlmMlr9gQm9kAzaz6yUG9AA9N8mmEng5yeABOen6US+gAFEX//Z'

export const Description = () => {
    return(
        <section className={styles.Description}>
            <div className={styles.Description__imageContainer}>
                <Image
                    src="/images/description.jpeg"
                    alt="products marketplace" 
                    fill
                    placeholder='blur'
                    blurDataURL={PLACEHOLDER_IMAGE}
                />
            </div>
            <div className={styles.Description__text}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui cumque in perferendis amet? Reprehenderit dignissimos ut laboriosam sint ex distinctio molestiae pariatur provident quod voluptatum. Sunt provident nulla doloremque!</p>
            </div>
        </section>
    )
}