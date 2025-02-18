'use client'

import { Highlight, themes } from 'prism-react-renderer'
import React, { useState } from 'react'
import { CopyButton } from './CopyButton'

type Props = {
  code: string
  language?: string
  filename?: string
}

export const Code: React.FC<Props> = ({ code, language = '', filename = '', }) => {
  if (!code) return null

  const [hovered, setHovered] = useState(false);

	const onEnter = () => {
		setHovered(true);
	};

	const onLeave = () => {
		setHovered(false);
	};

  return (
    <div>
      <p className="code-filename !m-0">{filename}</p>
      <Highlight code={code} language={language} theme={themes.nightOwl}>
        {({ getLineProps, getTokenProps, tokens }) => (
          <pre onMouseEnter={onEnter} onMouseLeave={onLeave} className="relative bg-[#011627] p-4 text-md overflow-x-auto">
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ className: 'table-row', line })}>
                <span className="table-cell select-none text-right text-white/25">{i + 1}</span>
                <span className="table-cell pl-4">
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))}
            {hovered && <CopyButton code={code} />}
          </pre>
        )}
      </Highlight>
    </div>
  )
}
