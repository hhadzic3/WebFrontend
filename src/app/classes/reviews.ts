export class Reviews{
    id: number
    state: string //[['NA PREGLEDU', 'ZAVRSEN', 'U ARHIVI', 'IN_PROGRESS', 'DONE', 'IN_ARCHIVE']]
    kind: string // REGULARNI , PREVENTIVNI , VANREDNI
    responsible_person: number
    vehicle: number
}