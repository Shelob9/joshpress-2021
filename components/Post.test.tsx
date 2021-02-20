import BlockContent from "@shelob9/block-content";
import { render } from '@testing-library/react';
import React from 'react';
describe("Post", () => {
    it ('Works with block content lib', () => {
        const { container } = render(<BlockContent rawContent={`<!-- wp:paragraph -->
        <p>First</p>
        <!-- /wp:paragraph -->`} />);
        expect(container).toMatchSnapshot();
    })

})