export interface Tournament {
    name: string,
    teamInTournament: TeamInTournament[],
}

export interface TeamInTournament {
    teamId: string,
    name: string,
    victories: number,
    draws: number,
    defeats: number,
}