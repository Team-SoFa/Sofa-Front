import { afterEach, describe, expect, it, vi } from 'vitest';

const loadAnalytics = async (enabled = true, measurementId = 'G-TEST') => {
  vi.stubEnv('NEXT_PUBLIC_ANALYTICS_ENABLED', String(enabled));
  vi.stubEnv('NEXT_PUBLIC_GA_MEASUREMENT_ID', measurementId);
  vi.resetModules();

  return import('./analytics');
};

describe('trackQueryFeedback', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it.each([
    ['up', 'up'],
    ['down', 'down'],
  ] as const)('%s 피드백을 app_query_id와 feedback_value로 전송한다', async (_, feedbackValue) => {
    const gtag = vi.fn();
    vi.stubGlobal('window', { gtag });
    const { trackQueryFeedback } = await loadAnalytics();

    trackQueryFeedback('query-123', feedbackValue);

    expect(gtag).toHaveBeenCalledOnce();
    expect(gtag).toHaveBeenCalledWith('event', 'query_feedback', {
      app_query_id: 'query-123',
      feedback_value: feedbackValue,
    });
    expect(gtag.mock.calls[0]?.[2]).not.toHaveProperty('value');
  });

  it('계측이 비활성화된 환경에서는 이벤트를 전송하지 않는다', async () => {
    const gtag = vi.fn();
    vi.stubGlobal('window', { gtag });
    const { trackQueryFeedback } = await loadAnalytics(false);

    trackQueryFeedback('query-123', 'up');

    expect(gtag).not.toHaveBeenCalled();
  });

  it('측정 ID가 없으면 이벤트를 전송하지 않는다', async () => {
    const gtag = vi.fn();
    vi.stubGlobal('window', { gtag });
    const { trackQueryFeedback } = await loadAnalytics(true, '');

    trackQueryFeedback('query-123', 'up');

    expect(gtag).not.toHaveBeenCalled();
  });
});
