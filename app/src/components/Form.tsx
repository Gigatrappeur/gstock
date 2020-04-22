import React from 'react';

interface TextBoxProps {
	type?: string
	label?: string
	helper?: string
	placeholder?: string
	Icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>
	iconPosition?: 'LEFT' | 'RIGHT'
	value?: string
	onChange?: React.ChangeEventHandler<HTMLInputElement>
	hasError?: boolean
	
	onFocus?: React.FocusEventHandler<HTMLInputElement>
}

export const TextBox = ({type, label, helper, Icon, iconPosition, hasError, ...props}: TextBoxProps) => {
	return (
		<div>
			<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
				{label}
				<span className="relative block">
					<input
						className={'appearance-none block w-full bg-gray-200 text-base border border-gray-200 rounded' + (label ? ' mt-1' : '') + ' py-3 px-4' + (Icon ? ' p' + (iconPosition == 'RIGHT' ? 'r' : 'l') + '-10' : '') +' leading-tight focus:outline-none focus:bg-white ' + (hasError ? 'border-red-500' : 'focus:border-gray-500')}
						type={type || 'text'}
						{...props} />
					{Icon && <Icon className={'pointer-events-none absolute text-gray-600 top-0 w-4 h-full mx-3' + (iconPosition == 'RIGHT' ? ' right-0' : '')} />}
				</span>
			</label>
			{helper && <p className={(hasError ? 'text-red-500' : 'text-gray-600') +' text-xs italic'}>{helper}</p>}
		</div>
	);
}


export const Password = (props: TextBoxProps) => {
	return <TextBox type="password" {...props} />
}