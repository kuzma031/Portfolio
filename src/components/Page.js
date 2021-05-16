import React from "react";

const Page = ({ id, className, title, subtitle, children }) => {
  return (
    <section className={`page ${className ? className : ""}`} id={id}>
        {title && <h2 className="page__title">{title}</h2>}
        {subtitle && <p className="page__subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />}
        {children}
    </section>
  )
}

export default Page
