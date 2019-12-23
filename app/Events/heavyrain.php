<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use App\Events\Event;
use DateTime;
class heavyrain implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public $location;
    public $message;
    public $date;
    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($message,$date, $location)
    {
        $this->message  = $message;
        $this->location  = $location;
        $this->date = $date;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return ['heavy-rain'];
    }
}
