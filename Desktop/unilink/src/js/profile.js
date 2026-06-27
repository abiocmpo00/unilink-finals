const roleSimulator = document.getElementById('roleSimulator');
const displayRoleBadge = document.getElementById('displayRoleBadge');
const dynamicRoleFields = document.getElementById('dynamicRoleFields');

// Object definitions holding custom input form properties for each role type
const roleLayouts = {
    student: {
        badgeClass: 'badge-student',
        badgeText: 'Student',
        html: `
            <h4>Academic Metrics</h4>
            <div class="form-row" style="margin-top: 1rem;">
                <div class="form-group">
                    <label>Student ID Number</label>
                    <input type="text" value="STU-2026-8941" disabled>
                </div>
                <div class="form-group">
                    <label>Enrolled Courses</label>
                    <input type="text" value="Web Development, UI/UX Design">
                </div>
            </div>
        `
    },
    teacher: {
        badgeClass: 'badge-teacher',
        badgeText: 'Teacher',
        html: `
            <h4>Faculty Directory Information</h4>
            <div class="form-row" style="margin-top: 1rem;">
                <div class="form-group">
                    <label>Employee ID Code</label>
                    <input type="text" value="FAC-2015-0044" disabled>
                </div>
                <div class="form-group">
                    <label>Department Specialization</label>
                    <input type="text" value="Computer Science & Information Systems">
                </div>
            </div>
        `
    },
    admin: {
        badgeClass: 'badge-admin',
        badgeText: 'Admin',
        html: `
            <h4>System Administrator Permissions</h4>
            <div class="form-row" style="margin-top: 1rem;">
                <div class="form-group">
                    <label>Access Clearances</label>
                    <input type="text" value="Level-5 Full Control Override" disabled>
                </div>
                <div class="form-group">
                    <label>Assigned Maintenance Terminal</label>
                    <input type="text" value="Main-Server-Cluster-01">
                </div>
            </div>
        `
    }
};

// Event change listener function to dynamically re-render fields
function updateProfileView(role) {
    const config = roleLayouts[role];
    
    // Reset and apply badge states
    displayRoleBadge.className = 'role-badge ' + config.badgeClass;
    displayRoleBadge.textContent = config.badgeText;
    
    // Swap configuration form content inner blocks
    dynamicRoleFields.innerHTML = config.html;
}

// Listen for selector modifications
roleSimulator.addEventListener('change', (e) => {
    updateProfileView(e.target.value);
});

// Setup default rendering profile state on window startup loads
updateProfileView('student');

// Basic alert placeholder for submission handling
document.getElementById('profileForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Changes saved successfully!');
});