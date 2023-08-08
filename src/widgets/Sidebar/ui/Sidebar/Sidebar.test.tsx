import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import React from "react";



describe('Sidebar', () => {
    test('with only first param', () => {
        render(<Sidebar />);
	   	expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });  
});