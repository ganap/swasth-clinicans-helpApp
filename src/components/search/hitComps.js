import React from "react";
import { Highlight, Snippet } from "react-instantsearch-dom";
import { Link } from "gatsby";

export const PageHit = clickHandler => ({ hit }) => {
  return (
    <div>
      <Link to={hit.href} onClick={clickHandler}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <p className="s-content">
        {hit.content}
      </p>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  )
}