import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIndividualArgs } from "./args/AggregateIndividualArgs";
import { Individual } from "../../../models/Individual";
import { AggregateIndividual } from "../../outputs/AggregateIndividual";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Individual)
export class AggregateIndividualResolver {
  @TypeGraphQL.Query(_returns => AggregateIndividual, {
    nullable: false
  })
  async aggregateIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIndividualArgs): Promise<AggregateIndividual> {
    return getPrismaFromContext(ctx).individual.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
