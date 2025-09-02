// tailwind.config.js

module.exports = {
    content: [
      './resources/**/*.vue',       // ✅ Vue files
      './resources/**/*.js',        // ✅ Any JS logic
      './resources/**/*.blade.php', // ✅ Just in case you also use in blade
    ],
    theme: {
      extend: {
        colors: {
            "primary-base": 'var(--v-primary-base)',
            "primary-lighten5": 'var(--v-primary-lighten5)',
            "primary-lighten4": 'var(--v-primary-lighten4)',
            "primary-lighten3": 'var(--v-primary-lighten3)',
            "primary-lighten2": 'var(--v-primary-lighten2)',
            "primary-lighten1": 'var(--v-primary-lighten1)',
            "primary-darken1": 'var(--v-primary-darken1)',
            "primary-darken2": 'var(--v-primary-darken2)',
            "primary-darken3": 'var(--v-primary-darken3)',
            "primary-darken4": 'var(--v-primary-darken4)',
            "secondary-base": 'var(--v-secondary-base)',
            "secondary-lighten5": 'var(--v-secondary-lighten5)',
            "secondary-lighten4": 'var(--v-secondary-lighten4)',
            "secondary-lighten3": 'var(--v-secondary-lighten3)',
            "secondary-lighten2": 'var(--v-secondary-lighten2)',
            "secondary-lighten1": 'var(--v-secondary-lighten1)',
            "secondary-darken1": 'var(--v-secondary-darken1)',
            "secondary-darken2": 'var(--v-secondary-darken2)',
            "secondary-darken3": 'var(--v-secondary-darken3)',
            "secondary-darken4": 'var(--v-secondary-darken4)',
        }
      }
    },
    plugins: []
  }
  