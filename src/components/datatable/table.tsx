import React from 'react';
import 'flowbite';

interface TableData {
  id: number;
  col1: string;
  col2: string;
  col3: string;
  col4: string;
}

interface TableProps {
  data?: TableData[];
}

const defaultData: TableData[] = [
  { id: 1, col1: 'Item', col2: 'Item', col3: 'Item', col4: 'Item' },
  { id: 2, col1: 'Item', col2: 'Item', col3: 'Item', col4: 'Item' },
  { id: 3, col1: 'Item', col2: 'Item', col3: 'Item', col4: 'Item' },
  { id: 4, col1: 'Item', col2: 'Item', col3: 'Item', col4: 'Item' },
  { id: 5, col1: 'Item', col2: 'Item', col3: 'Item', col4: 'Item' },
  { id: 6, col1: 'Item', col2: 'Item', col3: 'Item', col4: 'Item' },
];

const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-brand-secondary">
    <path d="M11.8214 14.1891C11.8214 14.221 11.8094 14.2516 11.7879 14.2742C11.7665 14.2967 11.7375 14.3094 11.7072 14.3094H3.73151C3.70123 14.3094 3.67219 14.2967 3.65078 14.2742C3.62937 14.2516 3.61734 14.221 3.61734 14.1891V5.78618C3.61734 5.75428 3.62937 5.72368 3.65078 5.70112C3.67219 5.67856 3.70123 5.66589 3.73151 5.66589H8.63753L10.0049 4.2253H3.73151C3.3387 4.22569 2.96208 4.39026 2.68433 4.68289C2.40657 4.97553 2.25036 5.37233 2.25 5.78618V14.1891C2.25036 14.603 2.40657 14.9998 2.68433 15.2924C2.96208 15.585 3.3387 15.7496 3.73151 15.75H11.7072C12.1 15.7496 12.4766 15.585 12.7544 15.2924C13.0322 14.9998 13.1884 14.603 13.1887 14.1891V9.0203L11.8214 10.4609V14.1891Z"/>
    <path d="M15.1468 2.88268C14.7621 2.47757 14.2405 2.25 13.6967 2.25C13.1528 2.25 12.6312 2.47757 12.2466 2.88268L6.92836 8.48512C6.83303 8.58572 6.76809 8.71378 6.74171 8.85319L6.25836 11.4001C6.23808 11.5048 6.24015 11.6129 6.26442 11.7166C6.28869 11.8203 6.33456 11.9171 6.39869 11.9998C6.46282 12.0826 6.54362 12.1492 6.63523 12.195C6.72684 12.2408 6.82696 12.2645 6.92836 12.2645C6.97423 12.2643 7.02 12.2598 7.06509 12.2508L9.48186 11.7416C9.61426 11.7136 9.73582 11.6449 9.83122 11.5442L15.1488 5.94176C15.3396 5.74091 15.4909 5.50238 15.594 5.23985C15.6972 4.97731 15.7502 4.69592 15.75 4.41177C15.7498 4.12763 15.6964 3.84631 15.5929 3.58393C15.4894 3.32155 15.3378 3.08325 15.1468 2.88268ZM14.18 3.90117C14.2436 3.96807 14.294 4.04751 14.3284 4.13495C14.3628 4.22239 14.3806 4.31612 14.3806 4.41078C14.3806 4.50544 14.3628 4.59917 14.3284 4.68661C14.294 4.77405 14.2436 4.85349 14.18 4.92039L13.8136 5.30574L12.8469 4.28725L13.2133 3.90117C13.3415 3.76614 13.5154 3.69028 13.6967 3.69028C13.878 3.69028 14.0518 3.76614 14.18 3.90117ZM9.00876 10.3687L7.80003 10.6237L8.04205 9.34947L11.8802 5.30574L12.8469 6.32424L9.00876 10.3687Z"/>
  </svg>
);

const DeleteIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-brand-secondary">
    <path d="M15 4.65789H12V3.07895C12 2.66018 11.842 2.25857 11.5607 1.96246C11.2794 1.66635 10.8978 1.5 10.5 1.5H7.5C7.10218 1.5 6.72064 1.66635 6.43934 1.96246C6.15804 2.25857 6 2.66018 6 3.07895V4.65789H3C2.80109 4.65789 2.61032 4.74107 2.46967 4.88913C2.32902 5.03718 2.25 5.23799 2.25 5.44737C2.25 5.65675 2.32902 5.85756 2.46967 6.00561C2.61032 6.15367 2.80109 6.23684 3 6.23684H3.75V14.9211C3.75 15.3398 3.90804 15.7414 4.18934 16.0375C4.47064 16.3336 4.85218 16.5 5.25 16.5H12.75C13.1478 16.5 13.5294 16.3336 13.8107 16.0375C14.092 15.7414 14.25 15.3398 14.25 14.9211V6.23684H15C15.1989 6.23684 15.3897 6.15367 15.5303 6.00561C15.671 5.85756 15.75 5.65675 15.75 5.44737C15.75 5.23799 15.671 5.03718 15.5303 4.88913C15.3897 4.74107 15.1989 4.65789 15 4.65789ZM7.5 3.07895H10.5V4.65789H7.5V3.07895ZM12.75 14.9211H5.25V6.23684H12.75V14.9211Z"/>
    <path d="M7.5 7.02632C7.30109 7.02632 7.11032 7.10949 6.96967 7.25755C6.82902 7.4056 6.75 7.60641 6.75 7.81579V13.3421C6.75 13.5515 6.82902 13.7523 6.96967 13.9003C7.11032 14.0484 7.30109 14.1316 7.5 14.1316C7.69891 14.1316 7.88968 14.0484 8.03033 13.9003C8.17098 13.7523 8.25 13.5515 8.25 13.3421V7.81579C8.25 7.60641 8.17098 7.4056 8.03033 7.25755C7.88968 7.10949 7.69891 7.02632 7.5 7.02632Z"/>
    <path d="M10.5 7.02632C10.3011 7.02632 10.1103 7.10949 9.96967 7.25755C9.82902 7.4056 9.75 7.60641 9.75 7.81579V13.3421C9.75 13.5515 9.82902 13.7523 9.96967 13.9003C10.1103 14.0484 10.3011 14.1316 10.5 14.1316C10.6989 14.1316 10.8897 14.0484 11.0303 13.9003C11.171 13.7523 11.25 13.5515 11.25 13.3421V7.81579C11.25 7.60641 11.171 7.4056 11.0303 7.25755C10.8897 7.10949 10.6989 7.02632 10.5 7.02632Z"/>
  </svg>
);

const Table: React.FC<TableProps> = ({ data = defaultData }) => {
  const handleEdit = (id: number) => {
    console.log('Edit item:', id);
  };

  const handleDelete = (id: number) => {
    console.log('Delete item:', id);
  };

  const handleLinkClick = (id: number) => {
    console.log('Link clicked for item:', id);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto rounded-radius-4 shadow-shadow bg-white overflow-hidden">
      <table className="w-full table-fixed">
        <colgroup>
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
          <col className="w-1/5" />
        </colgroup>
        <thead className="bg-gray-50">
          <tr>
            <th className="p-spacing-4 text-left text-sm text-brand-tertiary font-600 uppercase border-b border-gray-200">
              COL
            </th>
            <th className="p-spacing-4 text-left text-sm text-brand-tertiary font-600 uppercase border-b border-gray-200">
              COL
            </th>
            <th className="p-spacing-4 text-left text-sm text-brand-tertiary font-600 uppercase border-b border-gray-200">
              COL
            </th>
            <th className="p-spacing-4 text-left text-sm text-brand-tertiary font-600 uppercase border-b border-gray-200">
              COL
            </th>
            <th className="p-spacing-4 text-left text-sm text-brand-tertiary font-600 uppercase border-b border-gray-200">
              ACTIONS
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b border-gray-200 last:border-b-0">
              <td className="p-spacing-4 text-xs text-secondary font-600">
                {row.col1}
              </td>
              <td className="p-spacing-4 text-xs text-brand-tertiary font-600">
                {row.col2}
              </td>
              <td className="p-spacing-4 text-xs text-brand-tertiary font-600">
                {row.col3}
              </td>
              <td className="p-spacing-4 text-xs text-brand-tertiary font-600">
                {row.col4}
              </td>
              <td className="p-spacing-4">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => handleLinkClick(row.id)}
                    className="text-xs font-500 text-text-secondary underline hover:no-underline"
                  >
                    Link
                  </button>
                  <button
                    onClick={() => handleEdit(row.id)}
                    className="p-1 hover:bg-gray-50 rounded transition-colors"
                    aria-label="Edit"
                    data-tooltip-target={`tooltip-edit-${row.id}`}
                  >
                    <EditIcon />
                  </button>
                  <div
                    id={`tooltip-edit-${row.id}`}
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Edit
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                  <button
                    onClick={() => handleDelete(row.id)}
                    className="p-1 hover:bg-gray-50 rounded transition-colors"
                    aria-label="Delete"
                    data-tooltip-target={`tooltip-delete-${row.id}`}
                  >
                    <DeleteIcon />
                  </button>
                  <div
                    id={`tooltip-delete-${row.id}`}
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
                  >
                    Delete
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
