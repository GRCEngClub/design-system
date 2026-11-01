// The homepage hero's product view: one compliance pipeline run, the kind
// members build in the labs. Ported from grcengclub/src/components/PipelineRun.tsx
// (2026-11-01). Illustrative data, but every line is something the course teaches.
const PIPELINE_LOG = [
  { kind: 'cmd', text: 'terraform apply', arg: ' -auto-approve' },
  { kind: 'ok', text: 'aws_config_config_rule.s3_encryption    created' },
  { kind: 'ok', text: 'aws_lambda_function.evidence_collector  created' },
  { kind: 'ok', text: 'aws_cloudwatch_dashboard.controls       created' },
  { kind: 'blank', text: '' },
  { kind: 'cmd', text: 'opa test', arg: ' policies/ -v' },
  { kind: 'ok', text: 'data.grc.ac_2.deny_orphaned_users      PASS' },
  { kind: 'ok', text: 'data.grc.cm_6.require_baseline_tags    PASS' },
  { kind: 'ok', text: 'data.grc.sc_7.public_ingress           PASS' },
  { kind: 'muted', text: '3/3 passed in 84ms' },
  { kind: 'blank', text: '' },
  { kind: 'cmd', text: './collect-evidence', arg: ' --window 24h' },
  { kind: 'now', text: 'writing s3://grc-evidence/2026-11-01/…' },
];

const PIPELINE_CONTROLS = [
  { id: 'AC-2', name: 'No orphaned IAM users', status: 'pass', evidence: 'iam/users-2026-11-01.json' },
  { id: 'CM-6', name: 'Baseline tags on every resource', status: 'pass', evidence: 'config/cm-6-compliance.csv' },
  { id: 'SC-7', name: 'No public ingress on 0.0.0.0/0', status: 'pass', evidence: 'sg/ingress-audit.json' },
  { id: 'SC-28', name: 'S3 buckets encrypted at rest', status: 'pass', evidence: 's3/encryption-rule.json' },
  { id: 'SI-4', name: 'GuardDuty findings triaged', status: 'collecting', evidence: 'guardduty/findings-24h.json' },
];

function PipelineStatus({ status }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-brand-text-muted">
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${status === 'pass' ? 'bg-[#4cc38a]' : 'bg-brand-orange'}`} />
      {status}
    </span>
  );
}

function PipelineRun() {
  const passing = PIPELINE_CONTROLS.filter((c) => c.status === 'pass').length;
  return (
    <div
      className="w-full rounded-t-2xl border border-b-0 border-brand-gray-light bg-brand-gray overflow-hidden"
      aria-label="A compliance pipeline run, the kind members build in labs"
    >
      <div className="flex h-11 items-center gap-4 border-b border-brand-gray-light px-4 font-mono text-xs text-brand-text-dim">
        <span className="flex gap-1.5" aria-hidden>
          <i className="block h-2.5 w-2.5 rounded-full bg-brand-gray-light" />
          <i className="block h-2.5 w-2.5 rounded-full bg-brand-gray-light" />
          <i className="block h-2.5 w-2.5 rounded-full bg-brand-gray-light" />
        </span>
        <span className="text-brand-text-muted">compliance-pipeline · run 412 · main</span>
        <span className="ml-auto inline-flex items-center gap-1.5">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-orange" />
          evidence stage
        </span>
      </div>

      <div className="grid md:grid-cols-[5fr_7fr]">
        <div className="p-5 md:min-h-[260px]">
          <h3 className="mb-3 flex items-center gap-2 text-[13px] font-medium text-brand-text-muted">
            <Icon name="terminal" size={16} className="text-brand-text-dim" />
            Deploy and test
          </h3>
          <pre className="overflow-x-auto font-mono text-[12.5px] leading-5 text-brand-text-muted">
            {PIPELINE_LOG.map((l, i) => {
              if (l.kind === 'blank') return '\n';
              let line;
              if (l.kind === 'cmd') {
                line = (
                  <span>
                    <span className="text-brand-text-dim">$ </span>
                    <span className="text-brand-text">{l.text}</span>
                    {l.arg}
                  </span>
                );
              } else if (l.kind === 'ok') {
                const m = l.text.match(/(created|PASS)$/);
                line = (
                  <span>
                    {l.text.replace(/(created|PASS)$/, '')}
                    <span className="text-[#4cc38a]">{m ? m[0] : ''}</span>
                  </span>
                );
              } else if (l.kind === 'now') {
                line = (
                  <span>
                    <span className="text-brand-orange-light">writing</span>
                    {l.text.replace('writing', '')}
                  </span>
                );
              } else {
                line = <span className="text-brand-text-dim">{l.text}</span>;
              }
              return (
                <span key={i}>
                  {line}
                  {'\n'}
                </span>
              );
            })}
          </pre>
        </div>

        <div className="border-t border-brand-gray-light p-5 md:border-l md:border-t-0">
          <h3 className="mb-3 flex items-center gap-2 text-[13px] font-medium text-brand-text-muted">
            <Icon name="shield-check" size={16} className="text-brand-text-dim" />
            Controls tested tonight
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px]">
              <thead>
                <tr className="font-mono text-[11px] leading-4 text-brand-text-dim">
                  <th className="border-b border-brand-gray-light pb-2 pr-3 text-left font-normal">control</th>
                  <th className="border-b border-brand-gray-light pb-2 pr-3 text-left font-normal">what it checks</th>
                  <th className="border-b border-brand-gray-light pb-2 pr-3 text-left font-normal">status</th>
                  <th className="hidden border-b border-brand-gray-light pb-2 text-left font-normal lg:table-cell">evidence</th>
                </tr>
              </thead>
              <tbody>
                {PIPELINE_CONTROLS.map((c) => (
                  <tr key={c.id} className="h-9 border-b border-brand-gray-light">
                    <td className="pr-3"><Tag>{c.id}</Tag></td>
                    <td className="whitespace-nowrap pr-3 text-brand-text">{c.name}</td>
                    <td className="pr-3"><PipelineStatus status={c.status} /></td>
                    <td className="hidden max-w-[220px] truncate font-mono text-[11.5px] text-brand-text-dim lg:table-cell">
                      {c.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex gap-6 text-[13px] text-brand-text-dim tabular-nums">
            <span><span className="font-medium text-brand-orange-light">{PIPELINE_CONTROLS.length}</span> controls tested</span>
            <span><span className="font-medium text-brand-text">{passing}</span> passing</span>
            <span><span className="font-medium text-brand-text">{PIPELINE_CONTROLS.length - passing}</span> collecting</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.PipelineRun = PipelineRun;
