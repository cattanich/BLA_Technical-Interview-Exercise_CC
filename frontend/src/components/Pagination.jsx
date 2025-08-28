import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const PageButton = styled.button`
  background-color: ${props => props.active ? 'var(--primary-color)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : '#f5f5f5'};
  }
  
  &:disabled {
    background-color: #f5f5f5;
    color: #aaa;
    cursor: not-allowed;
  }
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;
    
    // Always show first page
    pages.push(1);
    
    // Calculate range around current page
    let rangeStart = Math.max(2, currentPage - Math.floor(maxPagesToShow / 2));
    let rangeEnd = Math.min(totalPages - 1, rangeStart + maxPagesToShow - 3);
    
    // Adjust range if we're near the beginning
    if (rangeStart === 2) {
      rangeEnd = Math.min(totalPages - 1, maxPagesToShow - 1);
    }
    
    // Adjust range if we're near the end
    if (rangeEnd === totalPages - 1) {
      rangeStart = Math.max(2, totalPages - maxPagesToShow + 2);
    }
    
    // Add ellipsis after first page if needed
    if (rangeStart > 2) {
      pages.push('...');
    }
    
    // Add pages in range
    for (let i = rangeStart; i <= rangeEnd; i++) {
      pages.push(i);
    }
    
    // Add ellipsis before last page if needed
    if (rangeEnd < totalPages - 1) {
      pages.push('...');
    }
    
    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  return (
    <PaginationContainer>
      <PageButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &laquo;
      </PageButton>
      
      {getPageNumbers().map((page, index) => (
        page === '...' ? (
          <PageButton key={`ellipsis-${index}`} disabled>...</PageButton>
        ) : (
          <PageButton
            key={page}
            active={page === currentPage}
            onClick={() => onPageChange(page)}
          >
            {page}
          </PageButton>
        )
      ))}
      
      <PageButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &raquo;
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
