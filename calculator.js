/**
 * ABConvert Revenue Impact Calculator
 *
 * Calculates potential revenue lift from A/B testing based on:
 * - Monthly visitors
 * - Current conversion rate
 * - Average order value
 * - Expected improvement percentage
 */

const RevenueCalculator = {
  // DOM element references
  elements: {},

  /**
   * Initialize the calculator
   */
  init() {
    // Cache DOM elements
    this.elements = {
      visitors: document.getElementById('visitors'),
      conversionRate: document.getElementById('conversion-rate'),
      aov: document.getElementById('aov'),
      improvement: document.getElementById('improvement'),
      improvementLabel: document.getElementById('improvement-label'),
      currentRevenue: document.getElementById('current-revenue'),
      projectedRevenue: document.getElementById('projected-revenue'),
      liftBadge: document.getElementById('lift-badge'),
      liftPercent: document.getElementById('lift-percent'),
      annualImpact: document.getElementById('annual-impact')
    };

    // Check if all elements exist
    const allElementsExist = Object.values(this.elements).every(el => el !== null);
    if (!allElementsExist) {
      console.error('Some calculator elements are missing from the DOM');
      return;
    }

    // Initial calculation
    this.update();

    // Attach event listeners
    this.attachEventListeners();

    console.log('Revenue Calculator initialized successfully');
  },

  /**
   * Attach event listeners to all input fields
   */
  attachEventListeners() {
    // Number field inputs
    this.elements.visitors.addEventListener('input', () => this.update());
    this.elements.visitors.addEventListener('change', () => this.update());

    this.elements.conversionRate.addEventListener('input', () => this.update());
    this.elements.conversionRate.addEventListener('change', () => this.update());

    this.elements.aov.addEventListener('input', () => this.update());
    this.elements.aov.addEventListener('change', () => this.update());

    // Range slider
    this.elements.improvement.addEventListener('input', () => {
      this.updateSliderLabel();
      this.update();
    });

    // Update ARIA attributes on slider change
    this.elements.improvement.addEventListener('change', () => {
      const value = this.elements.improvement.value;
      this.elements.improvement.setAttribute('aria-valuenow', value);
    });
  },

  /**
   * Update the slider label in real-time
   */
  updateSliderLabel() {
    const value = parseInt(this.elements.improvement.value);
    this.elements.improvementLabel.textContent = `${value}%`;
  },

  /**
   * Calculate revenue metrics
   * @returns {Object} Calculated metrics
   */
  calculate() {
    // Parse input values
    const visitors = parseFloat(this.elements.visitors.value) || 0;
    const cr = parseFloat(this.elements.conversionRate.value) / 100 || 0;
    const aov = parseFloat(this.elements.aov.value) || 0;
    const improvement = parseFloat(this.elements.improvement.value) / 100 || 0;

    // Validate inputs
    if (visitors <= 0 || cr <= 0 || aov <= 0) {
      return {
        current: 0,
        projected: 0,
        monthlyLift: 0,
        annualLift: 0,
        improvement: improvement
      };
    }

    // Calculate current monthly revenue
    // Formula: Visitors × Conversion Rate × Average Order Value
    const current = visitors * cr * aov;

    // Calculate projected monthly revenue with improvement
    // Formula: Current Revenue × (1 + Improvement %)
    const projected = current * (1 + improvement);

    // Calculate monthly lift (difference)
    const monthlyLift = projected - current;

    // Calculate annual lift
    const annualLift = monthlyLift * 12;

    return {
      current,
      projected,
      monthlyLift,
      annualLift,
      improvement
    };
  },

  /**
   * Format number as currency (USD)
   * @param {number} num - Number to format
   * @returns {string} Formatted currency string
   */
  formatCurrency(num) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(num);
  },

  /**
   * Format number as percentage
   * @param {number} num - Number to format (0-1 range)
   * @returns {string} Formatted percentage string
   */
  formatPercent(num) {
    return `+${Math.round(num * 100)}%`;
  },

  /**
   * Add animation class to an element
   * @param {HTMLElement} element - Element to animate
   */
  animateValue(element) {
    if (!element) return;

    // Remove animation class if it exists
    element.classList.remove('value-update');

    // Trigger reflow to restart animation
    void element.offsetWidth;

    // Add animation class
    element.classList.add('value-update');

    // Remove class after animation completes
    setTimeout(() => {
      element.classList.remove('value-update');
    }, 300);
  },

  /**
   * Update all displayed values based on current inputs
   */
  update() {
    // Calculate metrics
    const results = this.calculate();

    // Update current revenue
    this.elements.currentRevenue.textContent =
      this.formatCurrency(results.current) + '/mo';

    // Update projected revenue with animation
    this.elements.projectedRevenue.textContent =
      this.formatCurrency(results.projected) + '/mo';
    this.animateValue(this.elements.projectedRevenue);

    // Update lift badge
    this.elements.liftBadge.textContent =
      this.formatCurrency(results.monthlyLift) + '/mo';

    // Update lift percentage
    this.elements.liftPercent.textContent =
      this.formatPercent(results.improvement) + ' lift';

    // Update annual impact with animation
    this.elements.annualImpact.textContent =
      this.formatCurrency(results.annualLift);
    this.animateValue(this.elements.annualImpact);

    // Update slider label
    this.updateSliderLabel();

    // Log for debugging (remove in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      console.log('Calculator updated:', {
        visitors: this.elements.visitors.value,
        cr: this.elements.conversionRate.value + '%',
        aov: '$' + this.elements.aov.value,
        improvement: this.elements.improvement.value + '%',
        results: {
          current: this.formatCurrency(results.current),
          projected: this.formatCurrency(results.projected),
          monthlyLift: this.formatCurrency(results.monthlyLift),
          annualLift: this.formatCurrency(results.annualLift)
        }
      });
    }
  },

  /**
   * Reset calculator to default values
   */
  reset() {
    this.elements.visitors.value = 50000;
    this.elements.conversionRate.value = 2.5;
    this.elements.aov.value = 75;
    this.elements.improvement.value = 15;
    this.update();
  }
};

/**
 * Initialize calculator when DOM is ready
 */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    RevenueCalculator.init();
  });
} else {
  // DOM already loaded
  RevenueCalculator.init();
}

/**
 * Expose calculator globally for debugging
 * Remove in production or keep for console access
 */
window.RevenueCalculator = RevenueCalculator;
