import { Avatar } from './Avatar';
import { Comment } from './Comment'
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src="https://github.com/claudiofsn.png"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Claudio Neto</strong>
                        <span>Full Stack Developer</span>
                    </div>
                </div>
                <time title='11 de Maio às oito horas e treze minutos' dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉<a href="#">{' '}jane.design/doctorcare</a></p>

                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>
                </p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}

/*
Default Exports = com essa exportação, você pode alterar o nome do componente no arquivo onde ele é importante
*/

// Named Exports = dessa forma você deve desestruturar o import no arquivo onde é importado