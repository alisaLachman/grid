import classNames from 'classnames';
import styles from './grid-area.module.scss';

export interface GridAreaProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const GridArea = ({ className }: GridAreaProps) => {
    return (
        <body>
            <nav>
                <a href="/home">Home</a> | <a href="/projects">Projects</a> |{' '}
                <a href="/about">About</a> | <a href="/contact">Contact Us</a>
            </nav>
            <header className={styles.header}>
                <h1>Header</h1>
            </header>
            <section>
                <aside>
                    <ol>
                        <li>First item</li>
                        <li>Second item</li>
                        <li>Third item</li>
                    </ol>
                </aside>
                <article>
                    <h1>Heading 1</h1>
                    <p>This is a paragraph.</p>
                </article>
            </section>
            <footer>
                <p>This is a paragraph.</p>
            </footer>
        </body>
    );
};
