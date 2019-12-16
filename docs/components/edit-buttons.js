import React from 'react';
import PropTypes from 'prop-types';
import Edit from '@mapbox/dr-ui/edit';
import * as helpers from '@mapbox/dr-ui/edit/helpers';

class EditButtons extends React.Component {
    render() {
        let { frontMatter, code, head } = this.props;
        const parsedCode = helpers.extractor(code);
        return (
            <div
                className="absolute-mm mb6 mb0-mm top right mr36-mm z2"
                style={{ marginTop: '4px' }}
            >
                <Edit
                    js={parsedCode.js}
                    html={parsedCode.html}
                    css={parsedCode.css}
                    frontMatter={frontMatter}
                    head={head}
                    resources={parsedCode.resources}
                />
            </div>
        );
    }
}

export default EditButtons;

EditButtons.propTypes = {
    code: PropTypes.string.isRequired,
    frontMatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }),
    head: PropTypes.string
};
