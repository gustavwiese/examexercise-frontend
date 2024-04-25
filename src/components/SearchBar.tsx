export default function SearchBar({
    setSearchInput,
}: {
    setSearchInput: (value: string) => void
}) {
    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Search here..."
                onChange={(e) => setSearchInput(e.target.value)}
            />
        </div>
    )
}
