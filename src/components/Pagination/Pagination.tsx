import React from 'react';
import ReactPaginate from "react-paginate";
import styles from './Pagination.module.scss'

type PaginationProps = {
    currentPage: number;
    onChangePage: (selected: number) => void;
}

export const Pagination = ({currentPage, onChangePage}: PaginationProps) => {
    return (
        <ReactPaginate
            className={styles.root}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event) => onChangePage(event.selected+1) }
            pageRangeDisplayed={4}
            pageCount={3}
            forcePage={currentPage-1}
        />
    );
};

