import css from './footer.module.css';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <a
        className={css.link}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Putinjov?tab=repositories"
      >
       <span className={css.text}> Created by Putinjov </span>
      </a>
    </div>
  );
};
