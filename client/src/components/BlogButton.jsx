import React from 'react'

export default function BlogButton({
  icon,
  label,
  buttonLink,
  className,
  textclassName,
  size,
  sizeFeatures,
  gap,
  removeTarget,
  removeAnchor,
  tagName,
  color = 'bg-primaryLight',
  //   animation = true,
}) {
  if (size === 'small') {
    sizeFeatures = 'rounded-[4px] px-[18px] py-[10px]'
    textclassName = 'text-paragraph3 font-secondFont'
    gap = 'gap-[10px]'
  } else {
    sizeFeatures = 'rounded-[8px] px-[30px] py-[16px]'
    textclassName = 'text-paragraph4 font-secondFont'
    gap = 'gap-[20px]'
  }

  //   const Animation = animation ? MotionDivDownToUp : 'div'
  //   const CustomTagName = removeAnchor ? 'div' : 'a' // Forçando um <a>

  return (
    <a
      href={buttonLink}
      target="_blank"
      className={`flex ${className} ${sizeFeatures} flex-row items-center justify-around transition ${color} bg-primary cursor-pointer text-background lg:scale-105 hover:scale-100 hover:duration-500 hover:bg-white hover:border hover:border-background hover:text-black transition-all w-[95%] text-sm border border-background rounded-full`}
    >
      <div className={`flex items-center text-center ${gap} min-h-[24px]`}>
        <div className="">{icon}</div>
        <p className={`flex items-center ${textclassName}`}>{label}</p>
      </div>
    </a>
  )
}
