import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1699727152109-b5b9592641ca?q=85&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Imagem de capa do perfil do usuário"
            />

            <div className={styles.profile}>

                <img
                    className={styles.avatar}
                    src="https://github.com/claudiofsn.png"
                    alt="foto de perfil do usuário"
                />

                <strong>Claudio Neto</strong>
                <span>Full Stack Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine
                        size={20}
                    />
                    Editar Perfil
                </a>
            </footer>
        </aside>
    );
}