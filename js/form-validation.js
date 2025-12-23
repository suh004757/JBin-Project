// ============================================
// JBIN PROJECT - FORM VALIDATION
// Client-side form validation for contact forms
// ============================================

document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return; // Exit if no contact form on page

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Form submission handler
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous errors
        clearErrors();

        let isValid = true;

        // Get form fields
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const company = document.getElementById('company');
        const projectType = document.getElementById('project-type');
        const timeline = document.getElementById('timeline');
        const message = document.getElementById('message');
        const agreement = document.getElementById('agreement');

        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!emailRegex.test(email.value.trim())) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate project type
        if (!projectType.value) {
            showError(projectType, 'Please select a project type');
            isValid = false;
        }

        // Validate timeline
        if (!timeline.value) {
            showError(timeline, 'Please select a timeline');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        } else if (message.value.trim().length < 10) {
            showError(message, 'Message must be at least 10 characters');
            isValid = false;
        }

        // Validate agreement checkbox
        if (!agreement.checked) {
            showError(agreement, 'You must agree to be contacted');
            isValid = false;
        }

        // If form is valid, submit (or show success message)
        if (isValid) {
            // In production, this would submit to a backend
            // For now, show success message
            showSuccessMessage();
            contactForm.reset();
        }
    });

    // Real-time validation on blur
    const requiredFields = contactForm.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        field.addEventListener('blur', function () {
            if (this.type === 'email') {
                if (this.value.trim() && !emailRegex.test(this.value.trim())) {
                    showError(this, 'Please enter a valid email address');
                } else {
                    clearError(this);
                }
            } else if (!this.value.trim()) {
                showError(this, `${this.previousElementSibling.textContent.replace('*', '').trim()} is required`);
            } else {
                clearError(this);
            }
        });
    });

    // Helper functions
    function showError(field, message) {
        const formGroup = field.closest('.form-group');
        const existingError = formGroup.querySelector('.form-error');

        if (existingError) {
            existingError.textContent = message;
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.textContent = message;
            formGroup.appendChild(errorDiv);
        }

        field.style.borderColor = '#f56565';
    }

    function clearError(field) {
        const formGroup = field.closest('.form-group');
        const existingError = formGroup.querySelector('.form-error');

        if (existingError) {
            existingError.remove();
        }

        field.style.borderColor = '';
    }

    function clearErrors() {
        const errors = contactForm.querySelectorAll('.form-error');
        errors.forEach(error => error.remove());

        const fields = contactForm.querySelectorAll('.form-input, .form-textarea, .form-select');
        fields.forEach(field => field.style.borderColor = '');
    }

    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'form-success';
        successDiv.innerHTML = `
      <div style="background-color: rgba(72, 187, 120, 0.1); 
                  border: 1px solid var(--color-success); 
                  border-radius: var(--border-radius-md); 
                  padding: var(--space-4); 
                  margin-bottom: var(--space-4);
                  color: var(--color-success);
                  text-align: center;">
        <strong>✓ Message sent successfully!</strong><br>
        We'll get back to you within 24 hours.
      </div>
    `;

        contactForm.insertBefore(successDiv, contactForm.firstChild);

        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }

});
