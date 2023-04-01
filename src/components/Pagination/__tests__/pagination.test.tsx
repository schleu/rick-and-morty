import { fireEvent, render } from "@testing-library/react";
import { Pagination } from "..";

import '@testing-library/jest-dom'


describe("Pagination component", () => {
    const mockChangePage = jest.fn();
    const totalPages = 5;
    const actualPage = 2;
      
    it("renders without crashing", () => {
      render(<Pagination actualPage={actualPage} totalPages={totalPages} changePage={mockChangePage} />);
    });
  
    it("snapshot", () => {
      const {container} = render(<Pagination actualPage={actualPage} totalPages={totalPages} changePage={mockChangePage} />);
      expect(container).toMatchSnapshot()
    });
  
    it("displays the current page and total pages", () => {
      const { getByText } = render(<Pagination actualPage={actualPage} totalPages={totalPages} changePage={mockChangePage} />);
      expect(getByText(`${actualPage} de ${totalPages}`)).toBeInTheDocument();
    });
  
    it("calls changePage function with the correct value when 'firstPage' is clicked", () => {
      const { getByText } = render(<Pagination actualPage={actualPage} totalPages={totalPages} changePage={mockChangePage} />);
      fireEvent.click(getByText("<<"));
      expect(mockChangePage).toHaveBeenCalledWith(1);
    });
  
    it("calls changePage function with the correct value when 'previousPage' is clicked", () => {
      const { getByText } = render(<Pagination actualPage={actualPage} totalPages={totalPages} changePage={mockChangePage} />);
      fireEvent.click(getByText("<"));
      expect(mockChangePage).toHaveBeenCalledWith(1);
    });
  
    it("calls changePage function with the correct value when 'nextPage' is clicked", () => {
      const { getByText } = render(<Pagination actualPage={actualPage} totalPages={totalPages} changePage={mockChangePage} />);
      fireEvent.click(getByText(">"));
      expect(mockChangePage).toHaveBeenCalledWith(3);
    });
  
    it("calls changePage function with the correct value when 'lastPage' is clicked", () => {
      const { getByText } = render(<Pagination actualPage={actualPage} totalPages={totalPages} changePage={mockChangePage} />);
      fireEvent.click(getByText(">>"));
      expect(mockChangePage).toHaveBeenCalledWith(totalPages);
    });
  });
  