
//all arguments to the addMarker method needs to satisfy the Mark interface
export interface Mark {
    location: {
        lat: number;
        lng: number;
    },
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(divId:string, ){
        this.googleMap = new google.maps.Map(document.getElementById(divId) as HTMLElement,{
            zoom:1,
            center:{
                lat:-34.397,
                lng:150.644
            }
        });
    }

    addMarker(mark: Mark): void{
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position:{
                lat: mark.location.lat,
                lng: mark.location.lng
            }
        })

        marker.addListener('click', ()=>{
            const infoWindow = new google.maps.InfoWindow({
                content: mark.markerContent()
            });

            infoWindow.open(this.googleMap, marker)
        })
    }


}
