import css from './footer.module.css';

export const Footer = () => {
  return (
    <div className={css.footer}>
      <a
        className={css.link}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Putinjov"
      >
        <span>
          &copy;
          Created 2023 by Putinjov
        </span>
      </a>
    </div>
  );
};
