import React, { MutableRefObject } from 'react';


export const Form = ({children, ...props}: React.FormHTMLAttributes<HTMLFormElement>) => {

	return (
		<form {...props}>
			{children}
		</form>
	);
};




interface TextBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	//type?: string
	label?: string
	helper?: string
	//placeholder?: string
	Icon?: React.ComponentType<React.SVGAttributes<SVGSVGElement>>
	iconPosition?: 'LEFT' | 'RIGHT'
	//value?: string
	//onChange?: React.ChangeEventHandler<HTMLInputElement>
	hasError?: boolean
	
	//onFocus?: React.FocusEventHandler<HTMLInputElement>

	rootClassName?: string
	labelClassName?: string
	//inputClassName?: string
	iconClassName?: string

	//ref?: MutableRefObject<HTMLInputElement | null>
	//name?: string
	multiline?: boolean
}

export const TextBox = ({type, label, helper, Icon, iconPosition, hasError, rootClassName, labelClassName, className, iconClassName, multiline, ...props}: TextBoxProps) => {
	const fieldClassName = 'appearance-none block w-full bg-gray-200 text-base border border-gray-200 rounded' + (label ? ' mt-1' : '') + ' py-3 px-4' + (Icon ? ' p' + (iconPosition == 'RIGHT' ? 'r' : 'l') + '-10' : '') +' leading-tight focus:outline-none focus:bg-white ' + (hasError ? 'border-red-500' : 'focus:border-gray-500') + ' ' + className;
	return (
		<div className={rootClassName}>
			<label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold ' + labelClassName}>
				{label}
				<span className="relative block">
					{multiline
						? <textarea value={props.value} onChange={props.onChange as any as React.ChangeEventHandler<HTMLTextAreaElement>} className={fieldClassName} rows={4} />
						: <input
							className={fieldClassName}
							type={type || 'text'}
							{...props} />}
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


// interface ButtonProps {
// 	children?: React.ReactNode,
// 	className?: string
// 	type?: 'submit' | 'reset' | 'button'
// }

export const BaseButton = ({className, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement>) => 
	<button {...props} className={'outline-none focus:outline-none active:scale-98 transform ' + className} />;

export const Button = ({className, color, ...props}: React.ButtonHTMLAttributes<HTMLButtonElement> & {color?: 'blue' | 'gray'}) => 
	<button {...props} className={(color ? 'btn-' + color : 'btn') + ' outline-none focus:outline-none active:scale-98 transform ' + className} />;



	
const BottomArrow = ({className, ...props}: React.SVGAttributes<SVGSVGElement>) =>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className={'fill-current ' + className} {...props}>
		<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
	</svg>;


export const Select = ({className, rootClassName, labelClassName, label, hasError, helper, icon: Icon, ...props}: React.SelectHTMLAttributes<HTMLSelectElement> & {helper?: string, hasError?: boolean, label?: string, labelClassName?: string, rootClassName?: string, icon?: React.ReactElement<React.SVGAttributes<SVGSVGElement>>}) => {
	const fieldClassName = 'appearance-none block w-full bg-gray-200 text-black text-base border border-gray-200 rounded' + (label ? ' mt-1' : '') + ' py-3 px-4' + /*(Icon ? ' p' + (iconPosition == 'RIGHT' ? 'r' : 'l') + '-10' : '') +*/ ' leading-tight focus:outline-none focus:bg-white ' + (hasError ? 'border-red-500' : 'focus:border-gray-500') + ' ' + className;
	return (
		<div className={'relative ' + rootClassName}>
			<label className={'block uppercase tracking-wide text-gray-700 text-xs font-bold ' + labelClassName}>
				{label}
				<span className="relative block">
					<select className={fieldClassName} {...props} />
					<div className="pointer-events-none absolute m-px right-0 top-0 bottom-0 w-5 flex items-center">
						{Icon ? React.cloneElement(Icon, {className: 'h-4 w-4'}) : <BottomArrow className="h-4 w-4" />}
					</div>
				</span>
			</label>
			{helper && <p className={(hasError ? 'text-red-500' : 'text-gray-600') +' text-xs italic'}>{helper}</p>}
		</div>
	);
}