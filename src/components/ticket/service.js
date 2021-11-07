class TicketService {
  constructor( core ) {
    this.core = core;
  }

  async create( data ) {
    const ticket = ( await this.core.db.query( `
      INSERT INTO Ticket( "workerId", "statusId", "purposeId", "codePrefix", "codeNumber" )
      VALUES ( 'cdeddb61-2512-4025-b0fc-bafb2e200697',
      ( SELECT id FROM TicketStatus WHERE name = 'wait' ), $1,
      ( SELECT prefix FROM Purpose WHERE id = $1 ),
      TICKET_CODE( $1 ) ) RETURNING *;`, [ data.purposeId ] ) )[ 0 ];
    return {
      id: ticket.id,
      ticketNumber: `${ ticket.codePrefix }-${ ticket.codeNumber }`,
      peopleBefore: await this.getPeopleBefore( ticket.id ),
      windowName: await this.getWindow( ticket.workerId ),
      issuanceTime: ticket.issuanceTime,
      issuanceDate: ticket.issuanceDate,
    };
  }

  getPeopleBefore( ticketId ) {
    return 0;
  }

  getWindow( workerId ) {
    return 'Окно!';
  }

  get( id ) {
    return this.core.db.select( 'Ticket', null, { id }, [] );
  }

  list( filters, pages ) {
    return this.core.db.select( 'Ticket', null, filters ? filters : {}, [ 'id' ], pages );
  }

  remove( id ) {
    return this.core.db.delete( 'Ticket', { id }, [ 'id' ] );
  }
}

module.exports = TicketService;
