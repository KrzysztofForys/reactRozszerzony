export const MovieCardSkeleton = () => {
    return(
        <div className="animate-pulse">
            <div className="aspec-[2/3] bg-zinc-700 rounded"/>
            <div className="h-3 bg-zinc-700 rounded mt-2 w-3/4"/>
            <div className="h-3 bg-zinc-700 rounded mt-1 w-1/4"/>
        </div>
    )
}