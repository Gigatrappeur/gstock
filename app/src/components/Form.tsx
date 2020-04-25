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

	labelClassName?: string
	inputClassName?: string
	iconClassName?: string
}

export const TextBox = ({type, label, helper, Icon, iconPosition, hasError, labelClassName, inputClassName, iconClassName, ...props}: TextBoxProps) => {
	return (
		<div>
			<label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold ' + labelClassName}>
				{label}
				<span className="relative block">
					<input
						className={'appearance-none block w-full bg-gray-200 text-base border border-gray-200 rounded' + (label ? ' mt-1' : '') + ' py-3 px-4' + (Icon ? ' p' + (iconPosition == 'RIGHT' ? 'r' : 'l') + '-10' : '') +' leading-tight focus:outline-none focus:bg-white ' + (hasError ? 'border-red-500' : 'focus:border-gray-500') + ' ' + inputClassName}
						type={type || 'text'}
						{...props} />
					{Icon && <Icon className={'pointer-events-none absolute text-gray-600 top-0 w-4 h-full mx-3' + (iconPosition == 'RIGHT' ? ' right-0' : '') + ' ' + iconClassName} />}
				</span>
			</label>
			{helper && <p className={(hasError ? 'text-red-500' : 'text-gray-600') +' text-xs italic'}>{helper}</p>}
		</div>
	);
}


export const Password = (props: TextBoxProps) => {
	return <TextBox type="password" {...props} />
}


interface CheckBoxProps {
	label?: string

	className?: string
}
const CheckIcon = encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" height="10" width="10" stroke="white" fill="none" stroke-width="2"><path d="M1 6 l5 5 l8 -8" /></svg>');
export const CheckBox = ({label, className}: CheckBoxProps) => {
	return (
		<div className={className}>
			<label className="block relative flex cursor-pointer text-gray-700 hover:text-black select-none">
				<input type="checkbox" className="appearance-none cursor-pointer border border-gray-600 h-4 w-4 rounded m-auto mr-2 outline-none bg-no-repeat bg-center bg-gray-600 not-checked:bg-none" style={{backgroundImage: 'url("data:image/svg+xml,' + CheckIcon + '")'}} />
				<span>{label}</span>
			</label>
			{/* helper ? */}
		</div>
	)
}


interface ButtonProps {
	children?: React.ReactNode,
	className?: string
}
export const Button = ({className, children}: ButtonProps) => {
	return (
		<button className={'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded outline-none focus:outline-none active:scale-98 transform ' + className}>{children}</button>
	);
}