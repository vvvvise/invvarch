import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateIndividualArgs } from "./args/AggregateIndividualArgs";
import { CreateManyAndReturnIndividualArgs } from "./args/CreateManyAndReturnIndividualArgs";
import { CreateManyIndividualArgs } from "./args/CreateManyIndividualArgs";
import { CreateOneIndividualArgs } from "./args/CreateOneIndividualArgs";
import { DeleteManyIndividualArgs } from "./args/DeleteManyIndividualArgs";
import { DeleteOneIndividualArgs } from "./args/DeleteOneIndividualArgs";
import { FindFirstIndividualArgs } from "./args/FindFirstIndividualArgs";
import { FindFirstIndividualOrThrowArgs } from "./args/FindFirstIndividualOrThrowArgs";
import { FindManyIndividualArgs } from "./args/FindManyIndividualArgs";
import { FindUniqueIndividualArgs } from "./args/FindUniqueIndividualArgs";
import { FindUniqueIndividualOrThrowArgs } from "./args/FindUniqueIndividualOrThrowArgs";
import { GroupByIndividualArgs } from "./args/GroupByIndividualArgs";
import { UpdateManyIndividualArgs } from "./args/UpdateManyIndividualArgs";
import { UpdateOneIndividualArgs } from "./args/UpdateOneIndividualArgs";
import { UpsertOneIndividualArgs } from "./args/UpsertOneIndividualArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Individual } from "../../../models/Individual";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateIndividual } from "../../outputs/AggregateIndividual";
import { CreateManyAndReturnIndividual } from "../../outputs/CreateManyAndReturnIndividual";
import { IndividualGroupBy } from "../../outputs/IndividualGroupBy";

@TypeGraphQL.Resolver(_of => Individual)
export class IndividualCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateIndividual, {
    nullable: false
  })
  async aggregateIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateIndividualArgs): Promise<AggregateIndividual> {
    return getPrismaFromContext(ctx).individual.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyIndividualArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnIndividual], {
    nullable: false
  })
  async createManyAndReturnIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnIndividualArgs): Promise<CreateManyAndReturnIndividual[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Individual, {
    nullable: false
  })
  async createOneIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneIndividualArgs): Promise<Individual> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyIndividualArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Individual, {
    nullable: true
  })
  async deleteOneIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneIndividualArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Individual, {
    nullable: true
  })
  async findFirstIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIndividualArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Individual, {
    nullable: true
  })
  async findFirstIndividualOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstIndividualOrThrowArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [Individual], {
    nullable: false
  })
  async individuals(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyIndividualArgs): Promise<Individual[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Individual, {
    nullable: true
  })
  async individual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIndividualArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => Individual, {
    nullable: true
  })
  async getIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueIndividualOrThrowArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [IndividualGroupBy], {
    nullable: false
  })
  async groupByIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByIndividualArgs): Promise<IndividualGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyIndividualArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Individual, {
    nullable: true
  })
  async updateOneIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneIndividualArgs): Promise<Individual | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => Individual, {
    nullable: false
  })
  async upsertOneIndividual(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneIndividualArgs): Promise<Individual> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).individual.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
