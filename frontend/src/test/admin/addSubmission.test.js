import React from "react";
//import ReactDOM from 'react-dom';
import Submission from '../../components/admin/AddSubmission';
import { cleanup, render} from '@testing-library/react';

afterEach(cleanup);

it("renders without crashing", () => {
    const result = render(<Submission />)
})

//expect().toBeTruthy();