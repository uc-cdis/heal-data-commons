import type { TestRunnerConfig } from '@storybook/test-runner';
import { injectAxe, checkA11y } from 'axe-playwright';

/*
 * See https://storybook.js.org/docs/writing-tests/test-runner#test-hook-api
 * to learn more about the test-runner hooks API.
 */
const config: TestRunnerConfig = {
  async preVisit(page) {
    await injectAxe(page);
  },
  async postVisit(page, context) {
    const skipA11y = ['Pages/Explorer'];
    if (!skipA11y.some((title) => context.title === title)) {
      await checkA11y(page, '#storybook-root', {
        detailedReport: true,
        detailedReportOptions: { html: true },
      });
    }
  },
};

export default config;
