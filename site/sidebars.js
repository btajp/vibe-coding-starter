// @ts-check

const sidebars = {
  tutorialSidebar: [
    'index',
    {
      type: 'category',
      label: '学習ルート',
      collapsed: false,
      items: [
        'route/index',
        {
          type: 'category',
          label: '第0部：AIエージェントと学び始める準備',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-0-start/index',
          },
          items: [
            'route/part-0-start/concept',
            'route/part-0-start/start-here',
            'route/part-0-start/prepare-environment',
            'route/part-0-start/install-ai-agent',
            'route/part-0-start/clone-and-first-request',
          ],
        },
        {
          type: 'category',
          label: '第1部：PC・OS・CLIの意味を回収する',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-1-pc-os-cli/index',
          },
          items: [
            'route/part-1-pc-os-cli/review-part-0',
            'route/part-1-pc-os-cli/files-paths',
            'route/part-1-pc-os-cli/os-wsl',
            'route/part-1-pc-os-cli/terminal-shell-commands',
            'route/part-1-pc-os-cli/dangerous-commands-permissions',
            'route/part-1-pc-os-cli/path-shell-config',
            'route/part-1-pc-os-cli/package-managers',
            'route/part-1-pc-os-cli/understand-clone',
            'route/part-1-pc-os-cli/secrets-and-accounts',
            'route/part-1-pc-os-cli/review',
          ],
        },
        {
          type: 'category',
          label: '第2部：生成AIとコーディングエージェントの基礎',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-2-ai-agents/index',
          },
          items: [
            'route/part-2-ai-agents/generative-ai',
            'route/part-2-ai-agents/models-and-llms',
            'route/part-2-ai-agents/chat-vs-agent',
            'route/part-2-ai-agents/agent-context',
            'route/part-2-ai-agents/tool-options',
            'route/part-2-ai-agents/safe-requests',
          ],
        },
        {
          type: 'category',
          label: '第3部：Gitで変更を見る・記録する',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-3-git-local/index',
          },
          items: [
            'route/part-3-git-local/git-vs-github',
            'route/part-3-git-local/create-practice-repo',
            'route/part-3-git-local/see-changes',
            'route/part-3-git-local/stage-and-commit',
            'route/part-3-git-local/gitignore-and-secrets',
            'route/part-3-git-local/review-ai-changes',
          ],
        },
        {
          type: 'category',
          label: '第4部：ローカルだけで小さく自動化する',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-4-local-automation/index',
          },
          items: [
            'route/part-4-local-automation/shell-script-basics',
            'route/part-4-local-automation/executable-and-path',
            'route/part-4-local-automation/go-cli',
            'route/part-4-local-automation/stdio-exit-status',
            'route/part-4-local-automation/scheduling',
            'route/part-4-local-automation/review-automation',
          ],
        },
        {
          type: 'category',
          label: '第5部：ブラウザで小さく作る',
          collapsed: false,
          link: {
            type: 'doc',
            id: 'route/part-5-browser-basics/index',
          },
          items: [
            'route/part-5-browser-basics/html-css-js-roles',
            'route/part-5-browser-basics/create-local-page',
            'route/part-5-browser-basics/dom-events',
            'route/part-5-browser-basics/forms-and-console',
            'route/part-5-browser-basics/localhost-and-typescript',
            'route/part-5-browser-basics/review-browser-app',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'リファレンス',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'reference/index',
      },
      items: [
        'reference/glossary',
        'reference/commands-cheatsheet',
        'reference/troubleshooting',
        'reference/macos-vs-wsl',
        'reference/macos-gnu-userland',
        'reference/repository-layout',
        'reference/ghq',
        'reference/shell-and-prompt-customization',
        'reference/ai-prompts',
        'reference/safety-basics',
        'reference/operation-mindset',
        'reference/learning-paths',
        'reference/official-links',
      ],
    },
  ],
};

module.exports = sidebars;
