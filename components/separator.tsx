function Separator({ isRed = false }: { isRed?: boolean }) {
    return (
        <div className={`w-full h-1 ${isRed ? "bg-background-primary-2" : "bg-background-secondary"}  shadow-2xs`}></div>
    )
}

export default Separator