import Puppy from "../puppy"

const FeaturedPuppy = ({ puppy }) => {
    if (puppy) {
        return (
            <div>
                <div className="row featuredPuppy">
                    <h3 className="clod-md-12 text-center">Featured puppy</h3>
                </div>
                <Puppy />
            </div>
        );
    }
    return <div>No featured puppy at this time</div>
}

export default FeaturedPuppy;