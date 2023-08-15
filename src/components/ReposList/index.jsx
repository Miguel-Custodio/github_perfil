import { useEffect, useState } from "react"

import styles from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState ([]);
    const [estaCarregando, setEstaCarregando] = useState(true)
    const [deuErro, setDeuErro] = useState(false)

    useEffect(() => {
        setEstaCarregando(true);
        setDeuErro(false);
        
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(res => {
            if (res.ok) {
                return res.json();
            } else {
                throw new Error('Usuário não encontrado');
            }
        })
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            },2000);
        })
        .catch(e => {
            setEstaCarregando(false)
            setDeuErro(true)
        });
    },[nomeUsuario]);

    return (
        <div className="container">
            {deuErro ? (
                <h1>Usuário inexistente, favor digitar corretamente o nome do usuário.</h1>
            ) : (
                estaCarregando ? (
                    <h1>Carregando...</h1>
                ) : (
                <ul className={styles.list}>
                    {/* {repos.map(repositorio => ( */}
                    {repos.map(({id, name, language, html_url }) => (
                        <li className={styles.listItem} key={id}>
                            <div className={styles.itemName}>
                                <b>Nome:</b> {name} <br />
                            </div>
                            <div className={styles.itemLanguage}>
                            <b>Linguagem:</b> {language} <br />
                            </div>
                            <a className={styles.itemLink} target="_blank" href={html_url}>Visitar no GitHub</a>
                        </li>
                    ))}
                </ul>
                )
            )}
        </div>
    )
}

export default ReposList