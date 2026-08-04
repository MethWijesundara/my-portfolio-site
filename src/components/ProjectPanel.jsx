import React from 'react';

const ProjectPanel = ({isOpen, onClose, projectId}) => {
    // you can add project details content here
    const getProjectContent=(id)=>{
        // return difference content based on project ID
        const contents = {
            dayli : '<p>Detailed information about DAYLI project...</p>',
            movieflix: '<p>Detailed information about MovieFlix project...</p>',
            'expense-tracker':'<p> Detailed information about Expense Tracker project...</p>'
        };
        return contents[id] || '<p>Project details coming soon...</p>'
    };

    if (!isOpen) return null;

    return(
        <>
            <div id='panelOverlay' className='panel-overlay visible' onClick={onClose}></div>
            <div id='projectPanel' className='project-panel open'>
                <button id='closePanel' className='close-panel-btn' onClick={onClose}>
                    <i className='fas fa-times'></i>
                </button>
                <div id='panelBody' dangerouslySetInnerHTML={{__html: getProjectContent(projectId)}}/>
            </div>
        </>
    );
};

export default ProjectPanel;